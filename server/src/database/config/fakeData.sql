 
INSERT INTO users (username, firstName,lastName,email,phoneNumber,password,bio,birthDate) values ('maramismail2','maram','ismail','maram2@gmail.com','0598796166','123456789','JavaScript','1997-09-21') , (
   'meme1' , 'meme' , 'Ms' , 'meme@gmail.com', '123456789','98745612335','TypeScript' , '1997-09-21'
 );
 
 INSERT INTO tasks (name ,   description , priority, endDate,status, sectionId )  values
       ('todo' , 'todo  todo' , 'high', '2030-06-25' , 'todo','3') ,
       ('to do routes' , 'create tasks router' , ' low' , '2022-05-23','done','5');

 INSERT INTO sections (name, projectId) values ('todo' , '1') , ('done','2');

 INSERT INTO projects (name, description) values ('GP' , 'Graduation Project') , ('Taskillo' , 'projects management ');

 INSERT INTO user_tasks (userId , taskId) values ('1','5');