import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import { Chats } from '../screen/chat/chats'
import { Main } from '../screen/main/main'
import { Profile } from '../screen/profile/profile'


export const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <nav className="navPanel">
                    <ul className="navPanel__box container">
                        <li className="navPanel__list">
                            <Link to="/" className="navPanel__link">Главная</Link>
                        </li>
                        <li className="navPanel__list">
                            <Link to="/profile" className="navPanel__link">Профиль</Link>
                        </li>
                        <li className="navPanel__list">
                            <Link to="/chats" className="navPanel__link">Чат</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Main></Main>
                    </Route>
                    <Route path="/profile">
                        <Profile></Profile>
                    </Route>
                    <Route exact path="/chats">
                        <Chats></Chats>
                    </Route>
                    <Route path="/chats/:chatId">
                        <Chats></Chats>
                    </Route>
                    <Route path="/not-found">
                        <p>404 Страница не найдена!</p>
                    </Route>
                    <Route><Redirect to="/not-found"></Redirect></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}