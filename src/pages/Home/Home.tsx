import { NavBar } from "../../components/NavBar/NavBar";
import { tools } from "../../database/tools";
import "./Home.css";

export const Home = () => {
    const listTools = tools.map((tool) => (
        <div
            className="item"
            style={{ backgroundColor: `${tool.background_color}` }}
        >
            <a href={tool.url}>{tool.name}</a>
        </div>
    ));

    return (
        <>
            <NavBar title="Converter Tools" />
            <div className="container">{listTools}</div>
        </>
    );
};
