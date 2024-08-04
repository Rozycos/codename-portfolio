import ArrowsIcon from "../ArrowsIcon/ArrowsIcon";
import ScrollIcon from "../ScrollIcon/ScrollIcon";

export default function BottomNavBar() {
    return (
        <>
            <div className="nav-bar">navbar</div>
            <div className="container bottom-nav-bar">
                <ScrollIcon/>
                <ArrowsIcon/>
            </div>
        </>
    );
}