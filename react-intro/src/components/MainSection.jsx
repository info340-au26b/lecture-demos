import { DogPicture } from "./Dogs.jsx";

export function MainContent(props) {

  const dayOfWeek = "Friday!";

  return (
    <main>
      <p>It's {dayOfWeek.toUpperCase()}!</p>
      <p>{1+1+1}</p>
      <div className="flex-container">
        <DogPicture name="Fido" isGrown={false} />
        <DogPicture name="Rover" isGrown={true} />
        <DogPicture name="Spot" isGrown={true} />
        <DogPicture name="Dubs" isGrown={false} />
      </div>
    </main>
  )
}
