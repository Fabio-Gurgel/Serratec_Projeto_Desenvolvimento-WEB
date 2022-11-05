import './style.css'
import whale from '../Images/whale-humpback-whale.gif'

function NotFound() {
    return (
        <main className='notfound'>
            <h1>Eroor 404</h1>
            <h2>Page Not Found</h2>

            <div>
                <img src={whale} alt="Gif da Baleia" />
            </div>
        </main>
    )
}
export default NotFound