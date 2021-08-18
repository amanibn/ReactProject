import React from 'react'
const Membre = (props) => {
    const name = props.nom
    return (
        <h2>Membre de la famille {name}</h2>
    )
}
export default Membre