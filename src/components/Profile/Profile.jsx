import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) => {
    return (
  <div className={styles.profileContainer}>
  <div className={styles.info}>
    <img
      src= {image}
      alt={`${name}'s avatar`}
      className={styles.avatar}     
    />
                <h3>{ name }</h3>
                <p>@{ tag }</p>
                <p>{ location }</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span>Followers</span>
      <span>{ stats.followers }</span>
    </li>
    <li>
      <span>Views</span>
      <span>{ stats.views }</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{ stats.likes }</span>
    </li>
  </ul>
</div>

    );
};

export default Profile;