const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Abhay Agrawal",
        email: "abhayagrawal@gmail.com",
      },
      {
        name: "Radium",
        email: "Radium@gmail.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Abhay",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest 1",
        email: "guest1@gmail.com",
      },
      {
        name: "Radium",
        email: "Radium@gmail.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest1",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest 2",
        email: "Guest2@gmail.com",
      },
      {
        name: "Radium",
        email: "Radium@gmail.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Guest2",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Abhay Agrawal",
        email: "abhayagrawal0000@gmail.com",
      },
      {
        name: "Radium",
        email: "Radium@example.com",
      },
      {
        name: "Guest1",
        email: "guest1@gmail.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Abhay Agrawal",
      email: "abhayagrawal0000@gmail.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Titanium",
        email: "titanium@gmail.com",
      },
      {
        name: "Radium",
        email: "radium@gmail.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Titanium",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Abhay Agrawal",
        email: "abhayagrawal0000@gmail.com",
      },
      {
        name: "Radium",
        email: "radium@gmail.com",
      },
      {
        name: "Guest1",
        email: "guest1@gmail.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest1",
      email: "guest1@gmail.com",
    },
  },
];

module.exports = {chats};
