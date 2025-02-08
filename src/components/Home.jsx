import { Button } from "./ui/button";

const Home = () => {

    return (
        <div>
            <div className="container flex flex-row justify-between m-auto mt-4 text-white align-middle border h-96 min-w-96 w-1200">
                <div className="flex flex-col flex-wrap pl-6 border content-stretch left">
                    <div className="mt-10 border row">
                        <h1 className="m-4 text-6xl">Heading</h1>
                    </div>
                    <div className="text-2xl row">
                        <p>
                            paragraph
                        </p>
                    </div>
                    <div className="flex mt-5 row">
                        <div className="flex mr-4">
                            <div className="">
                                icon
                            </div>
                            <div className="">
                                <h3>
                                    1.5 LAKHS +
                                </h3>
                                <p>
                                    aspirants <br /> mentored
                                </p>
                            </div>
                        </div>
                        <div className="flex mr-4">
                            <div className="">
                                icon
                            </div>
                            <div className="">
                                <h3>
                                    1.5 LAKHS +
                                </h3>
                                <p>
                                    aspirants <br /> mentored
                                </p>
                            </div>
                        </div>
                        <div className="flex mr-4">
                            <div className="">
                                icon
                            </div>
                            <div className="">
                                <h3>
                                    1.5 LAKHS +
                                </h3>
                                <p>
                                    aspirants <br /> mentored
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 row">
                        <Button className="mr-4"> explore courses</Button>
                        <Button className="mr-4"> book a demo session </Button>
                    </div>
                </div>
                <div className="flex right">
                    <div className="row">
                        <div className="col">
                            img
                        </div>
                        <div className="col">
                            img
                        </div>
                        <div className="col">
                            img
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            img
                        </div>
                        <div className="col">
                            img
                        </div>
                        <div className="col">
                            img
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            img
                        </div>
                        <div className="col">
                            img
                        </div>
                        <div className="col">
                            img
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;