import React from "react";

const MyForm = () =>
{
    const {register} = useForm();

    return 
    (
        <div style={stylesa.container}>
            <h4>SignUp</h4>
            <form>
                <input ref={register} placeholder="Username" style={styles.input} />
                <input ref={register} placeholder="Email" style={styles.input} />
                <input ref={register} placeholder="Password" style={styles.input} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyForm;