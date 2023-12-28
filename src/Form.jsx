export default function Form() {
    return (
        <form>
            <div><label for="what">What: </label><input type="text" name="what" id="what" /></div>
            <br />
            <div><label for="when">When: </label><input type="date" name="when" id="when" /></div>
            <br />
            <div><label for="who">Who: </label><input type="text" name="who" id="who" /></div>
        </form>
    );
}