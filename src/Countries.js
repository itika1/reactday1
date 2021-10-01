const Countries = () => {

    const list = [
        {
            name: "America",
            capital: "Washington DC"
        },
        {
            name: "India",
            capital: "New Delhi",
        },
        {
            name: "Austrlia",
            capital: "Canberra"
        }
    ];






    return (
        <div>
            <h1>Countries</h1>


            {
                list.map((country, index) => (
                    <div key={index}>
                        <h2 >{country.name}</h2>
                        <p>{country.capital}</p>
                    </div>
                )

                )
            }


        </div>
    )


}
export default Countries;