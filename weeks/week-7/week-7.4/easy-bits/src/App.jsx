import { RecoilRoot, useRecoilValue } from "recoil";
import {
  networkAtom,
  JobsAtom,
  MessagingAtom,
  NotificationsAtom,
} from "./atoms";

import { totalNotificationsSelector } from "./atoms";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot> 
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(JobsAtom);
  const messagingAtomCount = useRecoilValue(MessagingAtom);
  const notificationsAtomCount = useRecoilValue(NotificationsAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationsSelector); 

  return (
    <>
      <button>Home</button>

      <button>
        My network (
        {networkNotificationCount > 100
          ? "99+"
          : networkNotificationCount}
        )
      </button>

      <button>
        Jobs ({jobsAtomCount > 100 ? "99+" : jobsAtomCount})
      </button>

      <button>
        Messaging ({messagingAtomCount > 100 ? "99+" : messagingAtomCount})
      </button>

      <button>
        Notifications (
        {notificationsAtomCount > 100
          ? "99+"
          : notificationsAtomCount}
        )
      </button>

      <button>Me ({totalNotificationsCount})</button>
    </>
  );
}

export default App;