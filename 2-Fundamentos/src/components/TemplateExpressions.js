const TemplateExpressions = () => {
     const name = "Lucas Freire Vilhena"
     const data = {
    age: 31,
    job: "Programmer",
    };

    return (
        <div>
            <h1>ola {name}, tudo bem?</h1>
            <p>Voce atua como; {data.job}</p>
            <p>{4 + 4} </p>
        </div>
    )

}

export default TemplateExpressions