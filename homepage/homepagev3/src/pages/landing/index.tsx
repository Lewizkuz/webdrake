import { TextBox } from "../../Components";

export const LandingPage = () => {
  return (
    <>
      <TextBox>
        Welcome. This is a landing page. Choose the next page now
      </TextBox>
      <button
        onClick={() => {
          setPage("art");
        }}
      >
        nes page
      </button>
      <button
        onClick={() => {
          setPage("tech");
        }}
      >
        nes page
      </button>
    </>
  );
};
