import React, { useEffect, useState }  from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";

import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import HomePage from "./Home/HomePage.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import PostArticle from "./PostArticle/PostArticle.jsx";
import CategoryPage from "./Category/CategoryPage.jsx";
import IndividualCategoryPage from "./Category/IndividualCategoryPage.jsx";
import AllPets from './AllPets/AllPets.jsx';
import Contact from './Contact/Contact.jsx';
import ThankYou from './ThankYou/ThankYou.jsx';

// https://run.mocky.io/v3/00f9b6a5-c68a-48ad-a74e-f3c46051d7ae
// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

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

                {/* contact us page */}
                <Route path="/contactus" exact component={Contact} />

                {/* thankyou page */}
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
                    path="/baz"
                    exact
                    render={() => <Baz content={externalContent} />}
                />
                <Route component={Error} />
            </Switch>
        </>
    </div>
  );
}

export default App;
