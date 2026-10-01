
import { Inter } from 'next/font/google'
import { VideoCard } from "../components/VideoCard";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"How to learn coding in 30 days | 30 day plan | Code with me"}
        image={"sohan.png"}
        thumbImage={"sohan.png"}
        author={"Sohan Dsouza"}
        views={"100k"}
        timestamp={"2 days ago"}
      ></VideoCard>
    </div>
  )
}