import React from 'react';

export const AuthorNameLink = ({userId, name}) => (
    <a href={`/author/${userId}`}>{name}</a>
);