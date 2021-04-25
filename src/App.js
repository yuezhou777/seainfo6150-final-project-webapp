import React, { useEffect, useState }  from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";

import Error from "./Error/Error.jsx";
import HomePage from "./Home/HomePage.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import PostArticle from "./PostArticle/PostArticle.jsx";
import CategoryPage from "./Category/CategoryPage.jsx";
import IndividualCategoryPage from "./Category/IndividualCategoryPage.jsx";
import AllPets from './AllPets/AllPets.jsx';
import Contact from './Contact/Contact.jsx';
import ThankYou from './ThankYou/ThankYou.jsx';

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("https://run.mocky.io/v3/2a290061-05b3-4ae4-8b1b-1de1a2259ea7");
          const responseJson = await response.json();

          setFetchedData(Object.values(responseJson));
      };

      if (isEmpty(fetchedData)) {
          fetchData();
      }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
        <>
            <Switch>
                <Route path="/" exact>
                    <HomePage posts={fetchedData} />
                </Route>

                <Route path="/aboutus" exact component={AboutUs} />

                <Route path="/allpets" exact>
                    <AllPets posts={fetchedData} />
                </Route>

                <Route path="/contactus" exact component={Contact} />

                <Route path="/thankyou" exact component={ThankYou} />

                <Route
                    path="/posts/:id"
                    exact
                    render={({ match }) => (
                        <PostArticle
                            postId={match.params.id}
                            posts={fetchedData}
                        />
                    )}
                />

                <Route
                    path="/category/:breed"
                    exact
                    render={({ match }) => (
                        <IndividualCategoryPage
                            category={match.params.breed}
                            posts={fetchedData}
                        />
                    )}
                />

                <Route
                    path="/category"
                    exact>
                    <CategoryPage posts={fetchedData} />
                </Route>
                
                <Route
                    path="/error"
                    exact>
                    <Error />
                </Route>

                <Route component={Error} />
            </Switch>
        </>
    </div>
  );
}

export default App;
