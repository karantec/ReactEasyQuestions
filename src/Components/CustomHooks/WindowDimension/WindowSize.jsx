import useWindowDimensions from "./WindowDimension";


function WindowSize() {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default WindowSize;