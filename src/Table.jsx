export default function Table({ items }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>What</th>
                    <th>When</th>
                    <th>Who</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({what, when, who}) => (
                    <tr>
                        <td>{what}</td>
                        <td>{when}</td>
                        <td>{who}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}