import AddButton from '../AddButton/AddButton';
import Header from '../Header/Header';
import Item from '../Item/Item';

export default function HomeScreen() {
  return (
    <>
      <section className="flex flex-col w-screen h-screen bg-gradient-to-b from-primary-gradient to-secondary-gradient">
        <Header />
        <div id="itemList" className="flex flex-col">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
      <AddButton />
    </>
  );
}
