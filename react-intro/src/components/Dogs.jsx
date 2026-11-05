export function DogPicture(props) {
  console.log(props);
  const { name, isGrown } = props;


  // const isGrown = false;

  let puppyUrl;
  if(isGrown) {
    puppyUrl = "/img/husky.jpg"
  } else {
    puppyUrl = "/img/puppy.jpg"
  }

  return (
    <div>
      <img src={puppyUrl} alt="a cute puppy" />
      <p>A dog names {name}</p>
    </div>
  )
}
