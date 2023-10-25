import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Image from "./components/Image"
import Title from "./components/Title"
import Sidebar from "./components/Sidebar"
import TopBar from "./components/topBar"
import YouTubeEmbed from './components/Youtube'
import SocialMediaLinks from './components/Social'


function App() {
  const [count, setCount] = useState(0)
  document.title = "Full Body Fusion"

  return (
    <div>
      <TopBar></TopBar>
      <SocialMediaLinks></SocialMediaLinks>
      <Title></Title>
      
      <Image caption="Techstack of the Project" src="visionStack.jpg"></Image>
      <h2>Inspiration</h2>
      <p>In the world of virtual reality, the pursuit of true immersion has always been the holy grail. The ability to step into a virtual world and not only see but feel, touch, and interact with it has been a dream of technophiles and science fiction enthusiasts for decades. With the advancement of technology, this dream is closer to becoming a reality than ever before.Metaverse, VR, and games today lack true immersion. Even in the Metaverse, as a person, you exist completely phantom waist down. The movement of your elbows is predicted by an algorithm, and can look unstable and jittery. Worst of all, you have to use joycons to do something like waterbend, or spawn a fireball in your open palm.</p>
      <Image caption="Live animation of Raiyan Rizwan, one of the developers, displaying the VR tech" src="first.jpg"></Image>
      <h2>What it does</h2>
      <p>We built an iPhone powered full-body 3D tracking system that captures every aspect of the way that you move, and it costs practically nothing. By leveraging MediaPipePose's precise body part tracking and Unity's dynamic digital environment, it allows users to embody a virtual avatar that mirrors their real-life movements with precision. The use of Python-based sockets facilitates real-time communication, ensuring seamless and immediate translation of physical actions into the virtual world, elevating immersion for users engaging in virtual experiences.</p>
      <Image caption="Live animation of Samar Farooqi, one of the developers, displaying the VR tech" src="samar.jpg"></Image>
      <h2>How we built it</h2>
      <p>To create our real-life full-body tracking avatar, we integrated MediaPipePose with Unity and utilized Python-based sockets. Initially, we employed MediaPipePose's computer vision capabilities to capture precise body part coordinates, forming the avatar's basis. Simultaneously, we built a dynamic digital environment within Unity to house the avatar. The critical link connecting these technologies was established through Python-based sockets, enabling real-time communication. This integration seamlessly translated users' physical movements into their virtual avatars, enhancing immersion in virtual spaces.</p>
      <Image caption="Code that interfaced Unity and GoogleMediaPipe" src="points.png"></Image>
      <h2>Challenges we ran into</h2>
      <p>There were a number of issues. We first used media pipe holistic but then realized it was a legacy system and we couldn't get 3d coordinates for the hands. Then, we transitioned to using media pipe pose for the person's body and cutting out small sections of the image where we detected hands, and running media pipe hand on those sub images to capture both the position of the body and the position of the hands. The math required to map the local coordinate system of the hand tracking to the global coordinate system of the full body pose was difficult. There were latency issues with python and Unity, that had to be resolved by decreasing the amount of data points. We also had to use techniques like an exponential moving average to make the movements smoother. And naturally, there were hundreds of bugs that had to be resolved in parsing, moving, storing, and working with the data from these deep learning CV models.</p>
      <YouTubeEmbed videoId={"ORlMPXEBioU"}></YouTubeEmbed>
      <h2>What we learned</h2>
      <p>For one, we learned how to integrate MediaPipePose with Unity, all the while learning socket programming for data transfer via servers in python. We learned how to integrate c# with python since unity only works on c# scripts and MediaPipePose only works on python scripts. We also learned how to use openCV and computer vision pretty intimately, since we had to work around a number of limitations for the libraries and old legacy code lurking around Google. There was also an element of asynchronous code handling via queues. Cool to see the data structure in action!</p>

    </div>
  )
}

export default App
