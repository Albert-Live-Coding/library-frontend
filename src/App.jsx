import CardBestSeller from "./style/components/CardBestSeller";
import FetchData from "./components/FetchData";
FetchData().then((data) => console.log(data));


export const App = () => {
  return (
    <>
      <h1>Hello There</h1>
      <CardBestSeller/>
    </>
  );
};
