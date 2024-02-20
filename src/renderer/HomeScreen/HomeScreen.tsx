import { useState } from 'react';
import AddButton from '../AddButton/AddButton';
import Header from '../Header/Header';
import Item from '../Item/Item';

export default function HomeScreen() {
  // const [items, setItems] = useState<String[]>([]);

  const handleClick = () => {
    alert('hello');
  };

  return (
    <>
      <section className="flex flex-col w-screen h-screen bg-gradient-to-b from-primary-gradient to-secondary-gradient">
        <Header />
        <div id="itemList" className="flex flex-col">
          {/* {items.map((item, index) => (
            <Item key={index} />
          ))} */}
          <Item />
          <Item />
          <Item />
        </div>
      </section>
      <AddButton handleClick={handleClick} />
    </>
  );
}
