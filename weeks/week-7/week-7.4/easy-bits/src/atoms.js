import { atom } from "recoil";
import { selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const JobsAtom = atom({
  key: "JobsAtom",
  default: 0,
});

export const MessagingAtom = atom({
  key: "MessagingAtom",
  default: 12,
});

export const NotificationsAtom = atom({
  key: "NotificationsAtom",
  default: 0,
});

export const totalNotificationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(JobsAtom);
    const messagingAtomCount = get(MessagingAtom);
    const notificationsAtomCount = get(NotificationsAtom);

    return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationsAtomCount;
  },
});