-- users
INSERT INTO
    users (
        username,
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        birthDate,
        bio
    )
VALUES
    (
        'nadaBassam',
        'Nada',
        'Abuzaid',
        'nada@gmail.com',
        0599999999,
        '222222222',
        '2020-01-01',
        'I am a developer'
    ),
    (
        'karamZomlot',
        'Karam',
        'Zomlot',
        'karam@gmail.com',
        0599999999,
        '$2b$08$k/JWvbLpXRfEeKn75HFEHevUVueGfhfMu9fPkGRN39yDk8ZAZd65.',
        '2020-01-01',
        'I am a developer'
    ),
    (
        'amranMasri',
        'Amran',
        'AlMasri',
        'amran@gmail.com',
        0599999999,
        '222222222',
        '2020-01-01',
        'I am a developer'
    ),
    (
        'maramIsmail',
        'Maram',
        'Ismail',
        'maram@gmail.com',
        0599999999,
        '222222222',
        '2020-01-01',
        'I am a developer'
    );

-- projects
INSERT INTO
    projects (name, description)
VALUES
    (
        'Project 1',
        'This is project 1'
    ),
    (
        'Project 2',
        'This is project 2'
    ),
    (
        'Project 3',
        'This is project 3'
    ),
    (
        'Project 4',
        'This is project 4'
    ),
    (
        'Project 5',
        'This is project 5'
    ),
    (
        'Project 6',
        'This is project 6'
    ),
    (
        'Project 7',
        'This is project 7'
    ),
    (
        'Project 8',
        'This is project 8'
    ),
    (
        'Project 9',
        'This is project 9'
    ),
    (
        'Project 10',
        'This is project 10'
    );

-- user_projects
INSERT INTO
    user_projects (userid, projectid, role)
VALUES
    (1, 1, 'editor'),
    (2, 2, 'viewer'),
    (3, 3, 'owner'),
    (4, 4, 'editor'),
    (1, 5, 'owner'),
    (2, 6, 'owner'),
    (3, 7, 'viewer'),
    (4, 8, 'viewer'),
    (1, 9, 'editor'),
    (3, 2, 'editor');

-- -- sections
INSERT INTO
    sections (name, projectId)
values
    ('Midterm', '1'),
    ('Projects', '2'),
    ('Midterm', '2'),
    ('Projects', '4'),
    ('Midterm', '6'),
    ('Projects', '6'),
    ('Midterm', '7'),
    ('Projects', '8'),
    ('Midterm', '9'),
    ('Projects', '10');

-- tasks
INSERT INTO
    tasks (
        name,
        description,
        priority,
        endDate,
        status,
        sectionId
    )
values
    (
        'Design Profile Page',
        'Comments are important for an app, look at the screen below',
        'High',
        '2030-06-25',
        'todo',
        '1'
    ),
    (
        'Update Design Library',
        'Comments are important for an app, look at the screen below',
        'Low',
        '2022-05-23',
        'done',
        '2'
    ),
    (
        'Design Comments',
        'Comments are important for an app, look at the screen below',
        'Low',
        '2022-05-23',
        'done',
        '2'
    ),
    (
        'Draw icons',
        'Comments are important for an app, look at the screen below',
        'Low',
        '2022-05-23',
        'done',
        '3'
    ),
    (
        'Design dark mood',
        'Comments are important for an app, look at the screen below',
        'low',
        '2022-05-23',
        'done',
        '4'
    ),
    (
        'Create a User Flow',
        'Comments are important for an app, look at the screen below',
        'low',
        '2022-05-23',
        'done',
        '6'
    );

-- user_tasks
INSERT INTO
    user_tasks (userId, taskId)
values
    ('1', '1'),
    ('3', '2');