import Dashboard from '../../components/Dashboard';
import InteractionLinks from '../../components/DashboardHeader/InteractionLinks';
import AllCategoryDropDown from "../../components/DashboardHeader/AllCategoryDropDown";

const Home = () => {
    return (
        <>
            <InteractionLinks/>
            <AllCategoryDropDown/>
            <Dashboard/>
        </>
    );
};

export default Home;
