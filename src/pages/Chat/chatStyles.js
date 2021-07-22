import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    Chat: {
    textAlign: "center",
    maxWidth: "728px",
    margin: theme.spacing(0, 'auto'),
    },

    chat_section: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100%",
        backgroundColor: rgb(40, 37, 53),
    },

    main {
        padding: 10px;
        height: 80vh;
        margin: 10vh 0 10vh;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
    }

    form: {
        height: 10vh;
        position: fixed;
        bottom: 0;
        background-color: rgb(24, 23, 23);
        width: 100%;
        max-width: 728px;
        display: flex;
        font-size: 1.5rem;
    },

    form button {
        width: 20%;
        background-color: rgb(56, 56, 143);
    }

    input {
        line-height: 1.5;
        width: 100%;
        font-size: 1.5rem;
        background: rgb(58, 58, 58);
        color: white;
        outline: none;
        border: none;
        padding: 0 10px;
    }

    button {
        background-color: #282c34;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        font-size: 1.25rem;
    }

    button:disabled: {
        opacity: 0.5;
        cursor: not-allowed;
    },

    .sign-in {
        color: #282c34;
        background: white;
        max-width: 400px;
        margin: 0 auto;
    }

    ul,
    li {
        text-align: left;
        list-style: none;
    }

    p: {
        max-width: 500px,
        margin-bottom: 12px,
        line-height: 24px,
        padding: 10px 20px,
        border-radius: 25px,
        position: "relative",
        color: "white",
        textAlign: "center",
    },

    .message {
        display: flex;
        align-items: center;
    }

    .sent {
        flex-direction: row-reverse;
    }

    .sent p {
        color: white;
        background: #0b93f6;
        align-self: flex-end;
    }
    .received p {
        background: #e5e5ea;
        color: black;
    }

    .img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 2px 5px;
    }
}));

export default useStyles;