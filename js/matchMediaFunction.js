function matchMediaWindow(px, type) {

    type = type.toLowerCase();

    if (type == "max")
    {
        let windowMatch =  window.matchMedia( "(max-width: "+px+"px)");
        if (windowMatch.matches)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else if (type == "min")
    {
        let windowMatch =  window.matchMedia( "(min-width: "+px+"px)");
        if (windowMatch.matches)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else {
        console.log("matchMediaFunction error, use 'true' or 'false' as type");
    }
}