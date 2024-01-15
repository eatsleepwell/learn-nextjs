function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const layout = ({ children }: { children: React.ReactNode }) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading Product");
  }
  return (
    <>
      {children}
      <h1>Features Products</h1>
    </>
  );
};

export default layout;
