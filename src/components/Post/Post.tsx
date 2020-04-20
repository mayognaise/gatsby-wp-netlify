import postStyles from './Post.module.scss';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import classNames from 'classnames';

interface Props {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const Post = ({ title, excerpt, image, slug }: Props) => {
  return (
    <div className={classNames(postStyles.post, '')}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: title }} />
          <Card.Text dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Button variant="primary" as={Link} to={slug}>
            Read more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
