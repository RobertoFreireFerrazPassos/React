function setActiveAndAditionalClasses(active, aditionalClasses){
    if (aditionalClasses) return `${aditionalClasses} ${active ? "active" : ""}`;
    return `${active ? "active" : ""}`;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    setActiveAndAditionalClasses
}