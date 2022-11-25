import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

const DirectoryItem = (props) => {
  const { category } = props;
  const { title, imageUrl, routeName } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(routeName);
  };
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
