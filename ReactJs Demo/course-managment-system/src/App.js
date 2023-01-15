import AddCourseComponent from './components/AddCourseComponent';
import ListOfCourseComponent from './components/ListOfCourseComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';


const App = () => {
    return (
        <>
            <HeaderComponent />
            <div className="container">
                <BrowserRouter forceRefresh={true}>
                    <Switch>
                        <Route path="/" exact component={ListOfCourseComponent}></Route>
                        <Route path="/courses" component={ListOfCourseComponent}></Route>
                        <Route path="/add-course" component={AddCourseComponent}></Route>
                        <Route path="/update-course/:id" component={AddCourseComponent}></Route>
                    </Switch>
                </BrowserRouter>

            </div>
        </>
    );
}

export default App;
