PGDMP                         x            hello    11.4    11.4 0    U           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            V           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            W           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            X           1262    17945    hello    DATABASE     �   CREATE DATABASE hello WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE hello;
             postgres    false            �            1259    17946    academic_details    TABLE        CREATE TABLE public.academic_details (
    college_id integer NOT NULL,
    activeback integer,
    boediploma character varying(255),
    boetenth character varying(255),
    boetwelth character varying(255),
    br character varying(255),
    diploma character varying(255),
    engstartyear character varying(255),
    gapdiploma integer,
    gaptenth integer,
    gaptwelth integer,
    marksfefs real,
    marksfess real,
    markssefs real,
    markssess real,
    markstefs real,
    markstess real,
    passiveback integer,
    perdip real,
    pereng real,
    perten real,
    pertwel real,
    placed boolean DEFAULT false,
    prn bigint,
    rogdiploma character varying(255),
    rogtenth character varying(255),
    rogtwelth character varying(255),
    roll_no integer,
    sgpaaggregate real,
    sgpafefs real,
    sgpafess real,
    sgpasefs real,
    sgpasess real,
    sgpatefs real,
    sgpatess real,
    yd integer,
    yopdiploma character varying(255),
    yoptenth character varying(255),
    yoptwelth character varying(255)
);
 $   DROP TABLE public.academic_details;
       public         postgres    false            �            1259    17953    academicdetails_skills    TABLE     �   CREATE TABLE public.academicdetails_skills (
    academicdetails_college_id integer NOT NULL,
    skills character varying(255)
);
 *   DROP TABLE public.academicdetails_skills;
       public         postgres    false            �            1259    17956    companyvisitec    TABLE     �  CREATE TABLE public.companyvisitec (
    sr_no character varying(255) NOT NULL,
    bec character varying(255),
    bee character varying(255),
    beit character varying(255),
    branch character varying(255),
    ce character varying(255),
    cgpa character varying(255),
    company character varying(255),
    entc character varying(255),
    f character varying(255),
    m character varying(255),
    mece character varying(255),
    meentc character varying(255),
    meit character varying(255),
    sallpa character varying(255),
    t character varying(255),
    tsallpa character varying(255),
    visit_date character varying(255)
);
 "   DROP TABLE public.companyvisitec;
       public         postgres    false            �            1259    17962    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public       postgres    false            �            1259    17964    industry    TABLE     �  CREATE TABLE public.industry (
    id integer NOT NULL,
    active_backlogs boolean NOT NULL,
    computer boolean,
    contactno1 character varying(255),
    contactno2 character varying(255),
    contactno3 character varying(255),
    cpemail1 character varying(255),
    cpemail2 character varying(255),
    cpname character varying(255),
    criteria real NOT NULL,
    entc boolean,
    final_date date,
    it boolean,
    name character varying(255),
    no_of_students integer NOT NULL,
    package_lpa real NOT NULL,
    passive_backlogs boolean NOT NULL,
    start_date date,
    joindate date,
    onlinetest character varying(255)
);
    DROP TABLE public.industry;
       public         postgres    false            �            1259    17970    industry_locality    TABLE     q   CREATE TABLE public.industry_locality (
    industry_id integer NOT NULL,
    locality character varying(255)
);
 %   DROP TABLE public.industry_locality;
       public         postgres    false            �            1259    17973    industry_skills    TABLE     m   CREATE TABLE public.industry_skills (
    industry_id integer NOT NULL,
    skills character varying(255)
);
 #   DROP TABLE public.industry_skills;
       public         postgres    false            �            1259    18116    jobdescription    TABLE     �   CREATE TABLE public.jobdescription (
    count integer NOT NULL,
    jobdescription character varying(255),
    designation character varying(255),
    id integer
);
 "   DROP TABLE public.jobdescription;
       public         postgres    false            �            1259    18114    jobdescription_count_seq    SEQUENCE     �   CREATE SEQUENCE public.jobdescription_count_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.jobdescription_count_seq;
       public       postgres    false    209            Y           0    0    jobdescription_count_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.jobdescription_count_seq OWNED BY public.jobdescription.count;
            public       postgres    false    208            �            1259    17982    location    TABLE     O   CREATE TABLE public.location (
    location character varying(255) NOT NULL
);
    DROP TABLE public.location;
       public         postgres    false            �            1259    18088    placedstudents    TABLE       CREATE TABLE public.placedstudents (
    count integer NOT NULL,
    pl_status integer DEFAULT 0,
    comp_id integer NOT NULL,
    id integer NOT NULL,
    idname character varying(255),
    location character varying(255),
    package_lpa real NOT NULL
);
 "   DROP TABLE public.placedstudents;
       public         postgres    false            �            1259    17992    signin    TABLE     z   CREATE TABLE public.signin (
    id integer NOT NULL,
    pass character varying(255),
    type character varying(255)
);
    DROP TABLE public.signin;
       public         postgres    false            �            1259    17998    skills    TABLE     K   CREATE TABLE public.skills (
    skills character varying(255) NOT NULL
);
    DROP TABLE public.skills;
       public         postgres    false            �            1259    18001    studentpersonal_details    TABLE     �  CREATE TABLE public.studentpersonal_details (
    rollno integer NOT NULL,
    adn character varying(255),
    cadd character varying(255),
    dob character varying(255),
    email character varying(255),
    fn character varying(255),
    gender character varying(255),
    ln character varying(255),
    mn character varying(255),
    mn1 character varying(255),
    mn2 character varying(255),
    padd character varying(255),
    annincome character varying(255),
    disability character varying(255),
    fathersname character varying(255),
    mothersname character varying(255),
    occupation character varying(255),
    fatname character varying(255),
    motname character varying(255),
    profile_img bytea
);
 +   DROP TABLE public.studentpersonal_details;
       public         postgres    false            �
           2604    18119    jobdescription count    DEFAULT     |   ALTER TABLE ONLY public.jobdescription ALTER COLUMN count SET DEFAULT nextval('public.jobdescription_count_seq'::regclass);
 C   ALTER TABLE public.jobdescription ALTER COLUMN count DROP DEFAULT;
       public       postgres    false    209    208    209            E          0    17946    academic_details 
   TABLE DATA               �  COPY public.academic_details (college_id, activeback, boediploma, boetenth, boetwelth, br, diploma, engstartyear, gapdiploma, gaptenth, gaptwelth, marksfefs, marksfess, markssefs, markssess, markstefs, markstess, passiveback, perdip, pereng, perten, pertwel, placed, prn, rogdiploma, rogtenth, rogtwelth, roll_no, sgpaaggregate, sgpafefs, sgpafess, sgpasefs, sgpasess, sgpatefs, sgpatess, yd, yopdiploma, yoptenth, yoptwelth) FROM stdin;
    public       postgres    false    196   4B       F          0    17953    academicdetails_skills 
   TABLE DATA               T   COPY public.academicdetails_skills (academicdetails_college_id, skills) FROM stdin;
    public       postgres    false    197   QB       G          0    17956    companyvisitec 
   TABLE DATA               �   COPY public.companyvisitec (sr_no, bec, bee, beit, branch, ce, cgpa, company, entc, f, m, mece, meentc, meit, sallpa, t, tsallpa, visit_date) FROM stdin;
    public       postgres    false    198   nB       I          0    17964    industry 
   TABLE DATA               �   COPY public.industry (id, active_backlogs, computer, contactno1, contactno2, contactno3, cpemail1, cpemail2, cpname, criteria, entc, final_date, it, name, no_of_students, package_lpa, passive_backlogs, start_date, joindate, onlinetest) FROM stdin;
    public       postgres    false    200   �B       J          0    17970    industry_locality 
   TABLE DATA               B   COPY public.industry_locality (industry_id, locality) FROM stdin;
    public       postgres    false    201   �B       K          0    17973    industry_skills 
   TABLE DATA               >   COPY public.industry_skills (industry_id, skills) FROM stdin;
    public       postgres    false    202   �B       R          0    18116    jobdescription 
   TABLE DATA               P   COPY public.jobdescription (count, jobdescription, designation, id) FROM stdin;
    public       postgres    false    209   �B       L          0    17982    location 
   TABLE DATA               ,   COPY public.location (location) FROM stdin;
    public       postgres    false    203   �B       P          0    18088    placedstudents 
   TABLE DATA               f   COPY public.placedstudents (count, pl_status, comp_id, id, idname, location, package_lpa) FROM stdin;
    public       postgres    false    207   C       M          0    17992    signin 
   TABLE DATA               0   COPY public.signin (id, pass, type) FROM stdin;
    public       postgres    false    204   9C       N          0    17998    skills 
   TABLE DATA               (   COPY public.skills (skills) FROM stdin;
    public       postgres    false    205   �C       O          0    18001    studentpersonal_details 
   TABLE DATA               �   COPY public.studentpersonal_details (rollno, adn, cadd, dob, email, fn, gender, ln, mn, mn1, mn2, padd, annincome, disability, fathersname, mothersname, occupation, fatname, motname, profile_img) FROM stdin;
    public       postgres    false    206   �C       Z           0    0    hibernate_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hibernate_sequence', 88, true);
            public       postgres    false    199            [           0    0    jobdescription_count_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.jobdescription_count_seq', 2, true);
            public       postgres    false    208            �
           2606    18008 &   academic_details academic_details_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.academic_details
    ADD CONSTRAINT academic_details_pkey PRIMARY KEY (college_id);
 P   ALTER TABLE ONLY public.academic_details DROP CONSTRAINT academic_details_pkey;
       public         postgres    false    196            �
           2606    18010 "   companyvisitec companyvisitec_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.companyvisitec
    ADD CONSTRAINT companyvisitec_pkey PRIMARY KEY (sr_no);
 L   ALTER TABLE ONLY public.companyvisitec DROP CONSTRAINT companyvisitec_pkey;
       public         postgres    false    198            �
           2606    18012    industry industry_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.industry
    ADD CONSTRAINT industry_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.industry DROP CONSTRAINT industry_pkey;
       public         postgres    false    200            �
           2606    18124 "   jobdescription jobdescription_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.jobdescription
    ADD CONSTRAINT jobdescription_pkey PRIMARY KEY (count);
 L   ALTER TABLE ONLY public.jobdescription DROP CONSTRAINT jobdescription_pkey;
       public         postgres    false    209            �
           2606    18016    location location_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (location);
 @   ALTER TABLE ONLY public.location DROP CONSTRAINT location_pkey;
       public         postgres    false    203            �
           2606    18096 "   placedstudents placedstudents_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.placedstudents
    ADD CONSTRAINT placedstudents_pkey PRIMARY KEY (count);
 L   ALTER TABLE ONLY public.placedstudents DROP CONSTRAINT placedstudents_pkey;
       public         postgres    false    207            �
           2606    18020    signin signin_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.signin
    ADD CONSTRAINT signin_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.signin DROP CONSTRAINT signin_pkey;
       public         postgres    false    204            �
           2606    18022    skills skills_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (skills);
 <   ALTER TABLE ONLY public.skills DROP CONSTRAINT skills_pkey;
       public         postgres    false    205            �
           2606    18024 4   studentpersonal_details studentpersonal_details_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.studentpersonal_details
    ADD CONSTRAINT studentpersonal_details_pkey PRIMARY KEY (rollno);
 ^   ALTER TABLE ONLY public.studentpersonal_details DROP CONSTRAINT studentpersonal_details_pkey;
       public         postgres    false    206            �
           2606    18125 *   jobdescription fk4ol2t5cofnx1y60rnju79sg7w    FK CONSTRAINT     �   ALTER TABLE ONLY public.jobdescription
    ADD CONSTRAINT fk4ol2t5cofnx1y60rnju79sg7w FOREIGN KEY (id) REFERENCES public.industry(id);
 T   ALTER TABLE ONLY public.jobdescription DROP CONSTRAINT fk4ol2t5cofnx1y60rnju79sg7w;
       public       postgres    false    209    200    2746            �
           2606    18030 *   industry_skills fka5vlx668yhg5px99r4rai526    FK CONSTRAINT     �   ALTER TABLE ONLY public.industry_skills
    ADD CONSTRAINT fka5vlx668yhg5px99r4rai526 FOREIGN KEY (industry_id) REFERENCES public.industry(id);
 T   ALTER TABLE ONLY public.industry_skills DROP CONSTRAINT fka5vlx668yhg5px99r4rai526;
       public       postgres    false    200    202    2746            �
           2606    18035 -   industry_locality fkjpwskbeng1u69lh9ven2spjmc    FK CONSTRAINT     �   ALTER TABLE ONLY public.industry_locality
    ADD CONSTRAINT fkjpwskbeng1u69lh9ven2spjmc FOREIGN KEY (industry_id) REFERENCES public.industry(id);
 W   ALTER TABLE ONLY public.industry_locality DROP CONSTRAINT fkjpwskbeng1u69lh9ven2spjmc;
       public       postgres    false    2746    200    201            �
           2606    18040 2   academicdetails_skills fkpnf6k90x1hgiq7cuo180by53d    FK CONSTRAINT     �   ALTER TABLE ONLY public.academicdetails_skills
    ADD CONSTRAINT fkpnf6k90x1hgiq7cuo180by53d FOREIGN KEY (academicdetails_college_id) REFERENCES public.academic_details(college_id);
 \   ALTER TABLE ONLY public.academicdetails_skills DROP CONSTRAINT fkpnf6k90x1hgiq7cuo180by53d;
       public       postgres    false    196    197    2742            �
           2606    18097 *   placedstudents fkpoi0qj9iv8mi78gxl8wffjxll    FK CONSTRAINT     �   ALTER TABLE ONLY public.placedstudents
    ADD CONSTRAINT fkpoi0qj9iv8mi78gxl8wffjxll FOREIGN KEY (id) REFERENCES public.signin(id);
 T   ALTER TABLE ONLY public.placedstudents DROP CONSTRAINT fkpoi0qj9iv8mi78gxl8wffjxll;
       public       postgres    false    207    2750    204            E      x������ � �      F      x������ � �      G      x������ � �      I      x������ � �      J      x������ � �      K      x������ � �      R      x������ � �      L      x������ � �      P      x������ � �      M   S   x�34�T1JT14P	3��+u�L7I3�r�Nu*5uγtt.6��O�4�
�*�LHuL�����LL�������� 8��      N      x������ � �      O      x������ � �     