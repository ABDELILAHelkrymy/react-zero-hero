import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  List,
  ListItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LessonCard = ({ sectionTitle, contentTitles }) => {
  const navigate = useNavigate();

  const navigateToContent = (contentPath) => {
    navigate(contentPath);
  };

  return (
    <Card style={{ marginTop: "30px" }}>
      <CardActionArea>
        <CardContent>
          <h2>{sectionTitle}</h2>
          <List>
            {contentTitles.map((title, index) => (
              <ListItem
                key={index}
                button
                onClick={() =>
                  navigateToContent(`/lesson/${sectionTitle}/${title}`)
                }
              >
                {title}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LessonCard;
