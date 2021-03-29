import {Fragment} from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container : {
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center',
        background : '#E7ECF2'
    },
    profile : {
        maxWidth : '600px',
        width : '100%',
        background : '#fff',
        boxShadow : '0px 12px 48px rgba(21, 34, 66, 0.16), 0px 0px 1px rgba(21, 34, 66, 0.32);',
        borderRadius : '6px'
    },
    description : {
        display: 'flex',
        flexDirection : 'column',
    }

})
const User = ({name, tag, location, avatar, stats: {followers, views, likes}}) => {
    const classes = useStyles()
    return (
        <Fragment>
            <div className={classes.container}>
                <h1>Профиль социальной сети</h1>
                <div className={classes.profile}>
                    <div className={classes.description}>
                        <img
                            src={avatar}
                            alt="Аватар пользователя"
                            className="avatar"
                        />
                        <p className="name">{name}</p>
                        <p className="tag">{tag}</p>
                        <p className="location">{location}</p>
                    </div>
                    <ul className="stats">
                        <li>
                            <span className="label">Followers</span>
                            <span className="quantity">{followers}</span>
                        </li>
                        <li>
                            <span className="label">Views</span>
                            <span className="quantity">{views}</span>
                        </li>
                        <li>
                            <span className="label">Likes</span>
                            <span className="quantity">{likes}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default User

