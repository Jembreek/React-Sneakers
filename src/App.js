import React from "react";
import axios from "axios";
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        axios('https://648842c50e2469c038fd5b95.mockapi.io/items').then((res) => {
            setItems(res.data);
        });
        axios('https://648842c50e2469c038fd5b95.mockapi.io/cart').then((res) => {
            setCartItems(res.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://648842c50e2469c038fd5b95.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        // axios.post(`https://648842c50e2469c038fd5b95.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue('')}
                                className="clear cu-p"
                                src="/img/btn-remove.svg"
                                alt="Clear"
                            />
                        )}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                    </div>
                 </div>

                <div className="d-flex flex-wrap">
                    {items
                        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).
                        map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imgUrl}
                            onFavorite={() => console.log('Добавили закладки')}
                            onPlus={(obj) => onAddToCart (obj)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default App;