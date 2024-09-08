import { useState } from "react";

function FormComponent() {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    function handleInputChange(event) {
        setNameValue(event.target.value);
    }

    function handleEmailChange(event) {
        setEmailValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        // console.log(nameValue, emailValue);
        console.log(formData);
    }

    function handleOnChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" name="name" value={nameValue} id="name" onChange={handleInputChange}
                    placeholder="Enter name here" />
                <input type="email" name="email" value={emailValue} id="email" onChange={handleEmailChange}
                    placeholder="Enter email here" /> */}
                {/* handle input change in form with one event */}
                <input type="text" name="name" value={formData.name} id="name" onChange={handleOnChange}
                    placeholder="Enter name here" />
                <input type="email" name="email" value={formData.email} id="email" onChange={handleOnChange}
                    placeholder="Enter email here" />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default FormComponent;