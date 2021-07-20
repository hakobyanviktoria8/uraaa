import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBarTop from "./NavBar/NavBarTop";
import NavBarBottom from "./NavBar/NavBarBottom";
import {useState, useEffect} from "react";

function App() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 70 ? setShow(false) : setShow(true)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);

    return (
        <div className="App">
            <Router>
                <NavBarTop show={show}/>

                {
                    show && <NavBarBottom/>
                }

                <div>
                    <Switch>
                        <Route exact path="/">
                            <h4>Home</h4>
                        </Route>
                        <Route path="/categories">
                            <h4>categories</h4>
                        </Route>
                        <Route path="/signin">
                            <h4>signin</h4>
                        </Route>
                        <Route path="/price-it">
                            <h4>price-it</h4>
                        </Route>
                        <Route path="/basket">
                            <h4>basket</h4>
                        </Route>
                        <Route path="/wishlist">
                            <h4>wishlist</h4>
                        </Route>
                        <Route path="/last-item">
                            <h4>last-item</h4>
                        </Route>
                        <Route path="/notifications">
                            <h4>notifications</h4>
                        </Route>
                        <Route path="/friends">
                            <h4>friends</h4>
                        </Route>
                    </Switch>
                </div>
            </Router>

            {/*text*/}
            <div style={{"padding": "20px"}}>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque est facilis ipsam
                    laboriosam magnam quas vitae voluptatibus? A architecto, blanditiis corporis doloremque ducimus, ea
                    eveniet fugiat impedit, in maiores minima mollitia neque perspiciatis placeat porro sapiente sit
                    suscipit tempore totam voluptatum. Alias amet architecto autem, delectus dignissimos eaque et
                    eveniet ex excepturi explicabo, facilis fuga fugiat ipsa ipsum iure laudantium mollitia neque nobis
                    numquam officia quaerat quis reiciendis rem sed tempore veniam voluptates? Aliquam assumenda, at,
                    blanditiis distinctio ea nemo optio perspiciatis porro provident quia, rem sed ullam voluptatibus.
                    Alias est ex porro recusandae, sapiente ut voluptas voluptates. Debitis, minima nostrum. A, at eius
                    enim est fugiat fugit iusto, minus omnis quo rem similique soluta totam? Amet delectus doloribus
                    ducimus et maiores nulla obcaecati, perferendis ratione sapiente. Ab accusantium at atque debitis
                    dicta dolore earum enim eum exercitationem id inventore magni maiores, maxime nam, officiis, omnis
                    placeat quaerat quibusdam quisquam reiciendis tempora tenetur totam ullam ut velit voluptate
                    voluptatem voluptatibus. Nisi, nostrum perspiciatis. Accusantium est ex inventore iure iusto magnam
                    perferendis placeat praesentium quidem sit! A accusamus, amet at consequuntur culpa deleniti
                    deserunt dolore earum eius et ex facere ipsam ipsum iste minima molestiae necessitatibus nihil
                    pariatur placeat possimus quisquam quod tempora tempore. Accusantium asperiores assumenda
                    consectetur dolor doloremque ducimus error hic ipsa, nemo, porro quae quaerat quibusdam quos ut,
                    vero! A adipisci atque culpa deserunt dicta eaque expedita explicabo fugiat iusto maxime minus modi
                    natus nisi nostrum numquam, perferendis quibusdam quisquam rem ut vel vitae voluptatem, voluptatibus
                    voluptatum! Aliquid animi, blanditiis dolores facilis laudantium molestiae molestias, necessitatibus
                    nihil quis recusandae, saepe sit tempore? Architecto beatae cupiditate delectus dolores ducimus esse
                    eveniet, fugiat hic id ipsa ipsam iure iusto labore maxime minima molestiae natus necessitatibus,
                    nobis nulla odio perferendis placeat praesentium quasi quos ratione saepe sed sequi sint velit
                    voluptas. Ab autem delectus dolor fugiat harum illo, incidunt neque obcaecati odit officia, sapiente
                    ullam! Asperiores at aut doloremque earum ex excepturi in, modi molestiae nisi obcaecati omnis
                    perspiciatis quidem tempora temporibus ut vel veniam! Deserunt quis recusandae tempore! Ab ad
                    aliquam amet asperiores aspernatur assumenda at corporis culpa delectus distinctio dolore dolorem
                    doloribus eaque eligendi enim et eveniet fuga fugit id impedit iusto nihil quae quam quidem saepe
                    sed tempore vel, veniam voluptate voluptatum? Distinctio earum est exercitationem illum in, nemo
                    nihil quo ratione reprehenderit sunt. Architecto assumenda cumque dignissimos dolore doloribus
                    ducimus earum excepturi expedita explicabo facere facilis, ipsa iusto laboriosam minus mollitia
                    necessitatibus nulla quaerat quas quos sint temporibus ullam veniam veritatis! Animi atque
                    consequatur cumque ea eaque eum iste nihil obcaecati reiciendis sint? Accusantium ad aspernatur
                    corporis deserunt dolorum ducimus eligendi esse inventore, ipsam iste magnam maxime molestiae nam
                    necessitatibus neque nihil non nulla praesentium provident quam quasi quibusdam ratione rerum saepe
                    sed similique sint sunt totam vel velit? Eum libero, non. Assumenda dolore dolorem dolorum expedita
                    illum molestias necessitatibus quaerat quo similique vel! Accusantium culpa dignissimos harum
                    inventore labore modi nobis provident quis quisquam, quod! Aliquid atque corporis dolor est iusto
                    nesciunt quisquam, ratione voluptatem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque est facilis ipsam
                    laboriosam magnam quas vitae voluptatibus? A architecto, blanditiis corporis doloremque ducimus, ea
                    eveniet fugiat impedit, in maiores minima mollitia neque perspiciatis placeat porro sapiente sit
                    suscipit tempore totam voluptatum. Alias amet architecto autem, delectus dignissimos eaque et
                    eveniet ex excepturi explicabo, facilis fuga fugiat ipsa ipsum iure laudantium mollitia neque nobis
                    numquam officia quaerat quis reiciendis rem sed tempore veniam voluptates? Aliquam assumenda, at,
                    blanditiis distinctio ea nemo optio perspiciatis porro provident quia, rem sed ullam voluptatibus.
                    Alias est ex porro recusandae, sapiente ut voluptas voluptates. Debitis, minima nostrum. A, at eius
                    enim est fugiat fugit iusto, minus omnis quo rem similique soluta totam? Amet delectus doloribus
                    ducimus et maiores nulla obcaecati, perferendis ratione sapiente. Ab accusantium at atque debitis
                    dicta dolore earum enim eum exercitationem id inventore magni maiores, maxime nam, officiis, omnis
                    placeat quaerat quibusdam quisquam reiciendis tempora tenetur totam ullam ut velit voluptate
                    voluptatem voluptatibus. Nisi, nostrum perspiciatis. Accusantium est ex inventore iure iusto magnam
                    perferendis placeat praesentium quidem sit! A accusamus, amet at consequuntur culpa deleniti
                    deserunt dolore earum eius et ex facere ipsam ipsum iste minima molestiae necessitatibus nihil
                    pariatur placeat possimus quisquam quod tempora tempore. Accusantium asperiores assumenda
                    consectetur dolor doloremque ducimus error hic ipsa, nemo, porro quae quaerat quibusdam quos ut,
                    vero! A adipisci atque culpa deserunt dicta eaque expedita explicabo fugiat iusto maxime minus modi
                    natus nisi nostrum numquam, perferendis quibusdam quisquam rem ut vel vitae voluptatem, voluptatibus
                    voluptatum! Aliquid animi, blanditiis dolores facilis laudantium molestiae molestias, necessitatibus
                    nihil quis recusandae, saepe sit tempore? Architecto beatae cupiditate delectus dolores ducimus esse
                    eveniet, fugiat hic id ipsa ipsam iure iusto labore maxime minima molestiae natus necessitatibus,
                    nobis nulla odio perferendis placeat praesentium quasi quos ratione saepe sed sequi sint velit
                    voluptas. Ab autem delectus dolor fugiat harum illo, incidunt neque obcaecati odit officia, sapiente
                    ullam! Asperiores at aut doloremque earum ex excepturi in, modi molestiae nisi obcaecati omnis
                    perspiciatis quidem tempora temporibus ut vel veniam! Deserunt quis recusandae tempore! Ab ad
                    aliquam amet asperiores aspernatur assumenda at corporis culpa delectus distinctio dolore dolorem
                    doloribus eaque eligendi enim et eveniet fuga fugit id impedit iusto nihil quae quam quidem saepe
                    sed tempore vel, veniam voluptate voluptatum? Distinctio earum est exercitationem illum in, nemo
                    nihil quo ratione reprehenderit sunt. Architecto assumenda cumque dignissimos dolore doloribus
                    ducimus earum excepturi expedita explicabo facere facilis, ipsa iusto laboriosam minus mollitia
                    necessitatibus nulla quaerat quas quos sint temporibus ullam veniam veritatis! Animi atque
                    consequatur cumque ea eaque eum iste nihil obcaecati reiciendis sint? Accusantium ad aspernatur
                    corporis deserunt dolorum ducimus eligendi esse inventore, ipsam iste magnam maxime molestiae nam
                    necessitatibus neque nihil non nulla praesentium provident quam quasi quibusdam ratione rerum saepe
                    sed similique sint sunt totam vel velit? Eum libero, non. Assumenda dolore dolorem dolorum expedita
                    illum molestias necessitatibus quaerat quo similique vel! Accusantium culpa dignissimos harum
                    inventore labore modi nobis provident quis quisquam, quod! Aliquid atque corporis dolor est iusto
                    nesciunt quisquam, ratione voluptatem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque est facilis ipsam
                    laboriosam magnam quas vitae voluptatibus? A architecto, blanditiis corporis doloremque ducimus, ea
                    eveniet fugiat impedit, in maiores minima mollitia neque perspiciatis placeat porro sapiente sit
                    suscipit tempore totam voluptatum. Alias amet architecto autem, delectus dignissimos eaque et
                    eveniet ex excepturi explicabo, facilis fuga fugiat ipsa ipsum iure laudantium mollitia neque nobis
                    numquam officia quaerat quis reiciendis rem sed tempore veniam voluptates? Aliquam assumenda, at,
                    blanditiis distinctio ea nemo optio perspiciatis porro provident quia, rem sed ullam voluptatibus.
                    Alias est ex porro recusandae, sapiente ut voluptas voluptates. Debitis, minima nostrum. A, at eius
                    enim est fugiat fugit iusto, minus omnis quo rem similique soluta totam? Amet delectus doloribus
                    ducimus et maiores nulla obcaecati, perferendis ratione sapiente. Ab accusantium at atque debitis
                    dicta dolore earum enim eum exercitationem id inventore magni maiores, maxime nam, officiis, omnis
                    placeat quaerat quibusdam quisquam reiciendis tempora tenetur totam ullam ut velit voluptate
                    voluptatem voluptatibus. Nisi, nostrum perspiciatis. Accusantium est ex inventore iure iusto magnam
                    perferendis placeat praesentium quidem sit! A accusamus, amet at consequuntur culpa deleniti
                    deserunt dolore earum eius et ex facere ipsam ipsum iste minima molestiae necessitatibus nihil
                    pariatur placeat possimus quisquam quod tempora tempore. Accusantium asperiores assumenda
                    consectetur dolor doloremque ducimus error hic ipsa, nemo, porro quae quaerat quibusdam quos ut,
                    vero! A adipisci atque culpa deserunt dicta eaque expedita explicabo fugiat iusto maxime minus modi
                    natus nisi nostrum numquam, perferendis quibusdam quisquam rem ut vel vitae voluptatem, voluptatibus
                    voluptatum! Aliquid animi, blanditiis dolores facilis laudantium molestiae molestias, necessitatibus
                    nihil quis recusandae, saepe sit tempore? Architecto beatae cupiditate delectus dolores ducimus esse
                    eveniet, fugiat hic id ipsa ipsam iure iusto labore maxime minima molestiae natus necessitatibus,
                    nobis nulla odio perferendis placeat praesentium quasi quos ratione saepe sed sequi sint velit
                    voluptas. Ab autem delectus dolor fugiat harum illo, incidunt neque obcaecati odit officia, sapiente
                    ullam! Asperiores at aut doloremque earum ex excepturi in, modi molestiae nisi obcaecati omnis
                    perspiciatis quidem tempora temporibus ut vel veniam! Deserunt quis recusandae tempore! Ab ad
                    aliquam amet asperiores aspernatur assumenda at corporis culpa delectus distinctio dolore dolorem
                    doloribus eaque eligendi enim et eveniet fuga fugit id impedit iusto nihil quae quam quidem saepe
                    sed tempore vel, veniam voluptate voluptatum? Distinctio earum est exercitationem illum in, nemo
                    nihil quo ratione reprehenderit sunt. Architecto assumenda cumque dignissimos dolore doloribus
                    ducimus earum excepturi expedita explicabo facere facilis, ipsa iusto laboriosam minus mollitia
                    necessitatibus nulla quaerat quas quos sint temporibus ullam veniam veritatis! Animi atque
                    consequatur cumque ea eaque eum iste nihil obcaecati reiciendis sint? Accusantium ad aspernatur
                    corporis deserunt dolorum ducimus eligendi esse inventore, ipsam iste magnam maxime molestiae nam
                    necessitatibus neque nihil non nulla praesentium provident quam quasi quibusdam ratione rerum saepe
                    sed similique sint sunt totam vel velit? Eum libero, non. Assumenda dolore dolorem dolorum expedita
                    illum molestias necessitatibus quaerat quo similique vel! Accusantium culpa dignissimos harum
                    inventore labore modi nobis provident quis quisquam, quod! Aliquid atque corporis dolor est iusto
                    nesciunt quisquam, ratione voluptatem.</p>
            </div>
        </div>
    );
}

export default App;
