import React from "react";


const users = (props) => {

    // console.log(props.data)
    return(
        <div>
            <h1>
                NAME:{props.data.name}
                {/* AGE:{props.data.ages} */}
            </h1>
            <h2>Age:{props.data.age}</h2>
        </div>
    )
}

export default users;