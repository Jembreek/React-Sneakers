function App() {
    return <div className="wrapper clear">
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt=""/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18}src="/img/cart.svg" alt=""/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt=""/>
                </li>
            </ul>
        </header>
        <div className="content p-40">
            <h1 className="mb-40">Все кроссовки</h1>

            <div className="d-flex">
                <div className="cart">
                    <img width={133} height={112} src="/img/1.jpg" alt=""/>
                    <p>Мужские крассовки Nike Blazer Mid Suede</p>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="cart">
                    <img width={133} height={112} src="/img/2.jpg" alt=""/>
                    <p>Мужские крассовки Nike Blazer Mid Suede</p>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="cart">
                    <img width={133} height={112} src="/img/3.jpg" alt=""/>
                    <p>Мужские крассовки Nike Blazer Mid Suede</p>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="cart">
                    <img width={133} height={112} src="/img/4.jpg" alt=""/>
                    <p>Мужские крассовки Nike Blazer Mid Suede</p>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default App;
