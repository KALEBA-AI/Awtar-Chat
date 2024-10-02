import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa";
import MultipleSelector from "@/components/ui/multipleselect";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";
import { CREATE_CHANNEL, GET_ALL_CONTACTS } from "@/lib/constants";
import { useSocket } from "@/contexts/SocketContext";
import { useAppStore } from "@/store";
import { Input } from "@/components/ui/input";

const CreateChannel = () => {
  const [newChannelModal, setNewChannelModal] = useState(false);
  const [allContacts, setAllContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [channelName, setChannelName] = useState("");
  const socket = useSocket();
  const { addChannel } = useAppStore();

  useEffect(() => {
    const getData = async () => {
      const response = await apiClient.get(GET_ALL_CONTACTS, {
        withCredentials: true,
      });
      setAllContacts(response.data.contacts);
    };
    getData();
  }, []);

  const createChannel = async () => {
    const response = await apiClient.post(
      CREATE_CHANNEL,
      {
        name: channelName,
        members: selectedContacts.map((contact) => contact.value),
      },
      { withCredentials: true }
    );
    if (response.status === 201) {
      setChannelName("");
      setSelectedContacts([]);
      setNewChannelModal(false);
      addChannel(response.data.channel);
      socket.emit("add-channel-notify", response.data.channel);
    }
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <FaPlus
              className=" text-neutral-400 font-light text-opacity-90 text-sm hover:text-neutral-100 cursor-pointer transition-all duration-300"
              onClick={() => setNewChannelModal(true)}
            />
          </TooltipTrigger>
          <TooltipContent className="bg-[#252C67] rounded-full border-none mb-2 p-3">
            Create New Channel
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Dialog open={newChannelModal} onOpenChange={setNewChannelModal}>
        <DialogDescription className="hidden">
          Please insert details
        </DialogDescription>
        <DialogContent className="bg-[radial-gradient(circle_at_left,#252C67,#101332)] border-none text-white w-[400px] h-max flex flex-col">
          <DialogHeader>
            <DialogTitle>Create a new Channel</DialogTitle>
          </DialogHeader>
          <div>
            <Input
              placeholder="Channel Name"
              className="rounded-lg py-6 px-4 bg-[#252C67] border-none"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
            />
          </div>
          <div>
            <MultipleSelector
              className="rounded-lg bg-[#252C67] border-none py-2 text-white"
              defaultOptions={allContacts}
              placeholder="Search Contacts"
              value={selectedContacts}
              onChange={setSelectedContacts}
              emptyIndicator={
                <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                  No results found.
                </p>
              }
            />
          </div>
          <div>
            <Button
              onClick={createChannel}
              className=" w-full bg-gradient-to-r from-[#65FA7D] to-[#24A488] hover:from-[#4bcf68] hover:to-[#1f8f71] transition-all duration-300"
            >
              Create Channel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateChannel;
