import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
// import { Nav } from "../components";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";
// import { Footer } from "../sections";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* <div className="pb-28">
      <Nav />
      </div> */}
      <main className="flex-grow">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mt-8">Lobby</h1>
          <form onSubmit={handleSubmitForm} className="mt-4">
            <label htmlFor="email" className="block mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-3 py-2 mb-4"
            />
            <label htmlFor="room" className="block mb-2">
              Room Number
            </label>
            <input
              type="text"
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="border rounded-md px-3 py-2 mb-4"
            />
            <Button label="JOIN" iconURL={arrowRight} />
          </form>
        </div>
      </main>
      {/* <div className="bg-black">
        <Footer />
      </div> */}
    </div>
  );
};

export default LobbyScreen;
