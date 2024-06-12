--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(20),
    age_in_millions_of_years integer,
    mass_in_tonnes integer,
    g_force numeric(4,1),
    description text,
    has_life boolean,
    has_water boolean NOT NULL
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(20),
    age_in_millions_of_years integer,
    mass_in_tonnes integer,
    g_force numeric(4,1),
    description text,
    has_life boolean,
    has_water boolean NOT NULL,
    planet_id integer NOT NULL,
    num_id integer NOT NULL
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: moon_num_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_num_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_num_id_seq OWNER TO freecodecamp;

--
-- Name: moon_num_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_num_id_seq OWNED BY public.moon.num_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(20),
    age_in_millions_of_years integer,
    mass_in_tonnes integer,
    g_force numeric(4,1),
    description text,
    has_life boolean,
    has_water boolean NOT NULL,
    star_id integer NOT NULL,
    num_id integer NOT NULL
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_num_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_num_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_num_id_seq OWNER TO freecodecamp;

--
-- Name: planet_num_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_num_id_seq OWNED BY public.planet.num_id;


--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: sample; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.sample (
    sample_id integer NOT NULL,
    name character varying(30),
    name1 character varying(30) NOT NULL,
    name2 character varying(30) NOT NULL
);


ALTER TABLE public.sample OWNER TO freecodecamp;

--
-- Name: sample_numbe_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.sample_numbe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sample_numbe_id_seq OWNER TO freecodecamp;

--
-- Name: sample_numbe_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.sample_numbe_id_seq OWNED BY public.sample.sample_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(20),
    age_in_millions_of_years integer,
    mass_in_tonnes integer,
    g_force numeric(4,1),
    description text,
    has_life boolean,
    has_water boolean NOT NULL,
    galaxy_id integer NOT NULL,
    num_id integer NOT NULL
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_num_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_num_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_num_id_seq OWNER TO freecodecamp;

--
-- Name: star_num_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_num_id_seq OWNED BY public.star.num_id;


--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: moon num_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN num_id SET DEFAULT nextval('public.moon_num_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: planet num_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN num_id SET DEFAULT nextval('public.planet_num_id_seq'::regclass);


--
-- Name: sample sample_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sample ALTER COLUMN sample_id SET DEFAULT nextval('public.sample_numbe_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Name: star num_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN num_id SET DEFAULT nextval('public.star_num_id_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'andromeda', 300, 3000, 90.3, 'very good galaxy', true, true);
INSERT INTO public.galaxy VALUES (2, 'milky way', 200, 2000, 93.1, 'dangerous galaxy', true, true);
INSERT INTO public.galaxy VALUES (3, 'triangulum', 400, 4000, 40.1, 'dont know', false, true);
INSERT INTO public.galaxy VALUES (4, 'whirlpool', 400, 4990, 40.2, 'washing machine', true, false);
INSERT INTO public.galaxy VALUES (5, 'sombrero', 500, 4500, 23.9, 'woooooo', false, false);
INSERT INTO public.galaxy VALUES (6, 'cartwheel', 250, 3500, 70.5, 'unique structure', true, false);
INSERT INTO public.galaxy VALUES (7, 'pinwheel', 150, 1800, 85.4, 'spiral beauty', false, true);
INSERT INTO public.galaxy VALUES (8, 'black eye', 300, 2900, 50.2, 'mysterious look', true, true);
INSERT INTO public.galaxy VALUES (9, 'messier 81', 180, 2700, 60.3, 'bright and large', false, true);
INSERT INTO public.galaxy VALUES (10, 'centaurus a', 220, 3800, 45.8, 'peculiar galaxy', true, false);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Luna', 4500, 734, 1.6, 'Earth moon', false, false, 3, 1);
INSERT INTO public.moon VALUES (2, 'Phobos', 4500, 11, 0.0, 'Mars moon', false, false, 4, 2);
INSERT INTO public.moon VALUES (3, 'Deimos', 4500, 2, 0.0, 'Mars moon', false, false, 4, 3);
INSERT INTO public.moon VALUES (4, 'Proxima b I', 1000, 50, 0.2, 'moon of Proxima b', false, false, 5, 4);
INSERT INTO public.moon VALUES (5, 'Proxima c I', 1000, 80, 0.3, 'moon of Proxima c', false, false, 6, 5);
INSERT INTO public.moon VALUES (6, 'Alpha Cen Bb I', 500, 100, 0.9, 'moon of Alpha Cen Bb', false, false, 7, 6);
INSERT INTO public.moon VALUES (7, 'Alpha Cen Bc I', 500, 150, 0.8, 'moon of Alpha Cen Bc', false, false, 8, 7);
INSERT INTO public.moon VALUES (8, 'Vega I I', 600, 200, 0.5, 'moon of Vega I', false, false, 9, 8);
INSERT INTO public.moon VALUES (9, 'Vega II I', 600, 120, 0.4, 'moon of Vega II', false, false, 10, 9);
INSERT INTO public.moon VALUES (10, 'Arcturus I I', 700, 300, 0.7, 'moon of Arcturus I', false, false, 11, 10);
INSERT INTO public.moon VALUES (11, 'Arcturus II I', 700, 250, 0.6, 'moon of Arcturus II', false, false, 12, 11);
INSERT INTO public.moon VALUES (12, 'Aldebaran I I', 500, 180, 0.4, 'moon of Aldebaran I', false, false, 13, 12);
INSERT INTO public.moon VALUES (13, 'Aldebaran II I', 500, 190, 0.3, 'moon of Aldebaran II', false, false, 14, 13);
INSERT INTO public.moon VALUES (14, 'Antares I I', 400, 210, 0.5, 'moon of Antares I', false, false, 15, 14);
INSERT INTO public.moon VALUES (15, 'Antares I II', 400, 220, 0.6, 'another moon of Antares I', false, false, 15, 15);
INSERT INTO public.moon VALUES (16, 'Jupiter I', 4500, 890, 1.8, 'moon of Jupiter', false, true, 1, 16);
INSERT INTO public.moon VALUES (17, 'Saturn I', 4500, 650, 1.2, 'moon of Saturn', false, true, 1, 17);
INSERT INTO public.moon VALUES (18, 'Neptune I', 4500, 700, 1.3, 'moon of Neptune', false, true, 1, 18);
INSERT INTO public.moon VALUES (19, 'Uranus I', 4500, 500, 1.1, 'moon of Uranus', false, true, 1, 19);
INSERT INTO public.moon VALUES (20, 'Pluto I', 4500, 130, 0.2, 'moon of Pluto', false, true, 1, 20);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Mercury', 4500, 330, 3.7, 'closest to the sun', false, false, 1, 1);
INSERT INTO public.planet VALUES (2, 'Venus', 4500, 4870, 8.9, 'hottest planet', false, false, 1, 2);
INSERT INTO public.planet VALUES (3, 'Earth', 4500, 5970, 9.8, 'our home', true, true, 1, 3);
INSERT INTO public.planet VALUES (4, 'Mars', 4500, 641, 3.7, 'red planet', false, false, 1, 4);
INSERT INTO public.planet VALUES (5, 'Proxima b', 4500, 1000, 1.1, 'earth-like', true, true, 4, 5);
INSERT INTO public.planet VALUES (6, 'Proxima c', 4500, 2000, 1.3, 'super-earth', false, false, 4, 6);
INSERT INTO public.planet VALUES (7, 'Alpha Cen Bb', 5000, 1500, 1.2, 'potentially habitable', true, true, 5, 7);
INSERT INTO public.planet VALUES (8, 'Alpha Cen Bc', 5000, 2000, 1.3, 'rocky planet', false, false, 6, 8);
INSERT INTO public.planet VALUES (9, 'Vega I', 6000, 3000, 3.2, 'gas giant', false, false, 7, 9);
INSERT INTO public.planet VALUES (10, 'Vega II', 6000, 1000, 1.5, 'rocky planet', false, false, 7, 10);
INSERT INTO public.planet VALUES (11, 'Arcturus I', 7000, 4000, 4.5, 'massive planet', false, false, 8, 11);
INSERT INTO public.planet VALUES (12, 'Arcturus II', 7000, 2500, 2.3, 'desert world', false, false, 8, 12);
INSERT INTO public.planet VALUES (13, 'Aldebaran I', 5000, 1500, 3.1, 'water world', true, true, 9, 13);
INSERT INTO public.planet VALUES (14, 'Aldebaran II', 5000, 1800, 2.9, 'rocky planet', false, false, 9, 14);
INSERT INTO public.planet VALUES (15, 'Antares I', 4000, 3000, 3.8, 'gas giant', false, false, 10, 15);


--
-- Data for Name: sample; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.sample VALUES (1, 'name1', 'name1', 'name1');
INSERT INTO public.sample VALUES (2, 'name2', 'name2', 'name2');
INSERT INTO public.sample VALUES (3, 'name3', 'name3', 'name3');


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Sirius', 300, 2500, 120.5, 'brightest star', false, false, 1, 1);
INSERT INTO public.star VALUES (2, 'Betelgeuse', 450, 1500, 80.2, 'red supergiant', false, true, 1, 2);
INSERT INTO public.star VALUES (3, 'Rigel', 100, 2000, 90.7, 'blue supergiant', false, false, 2, 3);
INSERT INTO public.star VALUES (4, 'Proxima Centauri', 450, 500, 40.1, 'closest star', true, true, 2, 4);
INSERT INTO public.star VALUES (5, 'Alpha Centauri A', 500, 1800, 60.3, 'binary star system', false, true, 3, 5);
INSERT INTO public.star VALUES (6, 'Alpha Centauri B', 500, 1750, 60.3, 'binary star system', false, true, 3, 6);
INSERT INTO public.star VALUES (7, 'Vega', 600, 2100, 75.6, 'bright in the night sky', false, false, 4, 7);
INSERT INTO public.star VALUES (8, 'Arcturus', 700, 1500, 55.2, 'giant star', false, false, 4, 8);
INSERT INTO public.star VALUES (9, 'Aldebaran', 500, 1300, 50.8, 'orange giant', false, true, 5, 9);
INSERT INTO public.star VALUES (10, 'Antares', 400, 1600, 70.4, 'red supergiant', false, false, 5, 10);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 1, false);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 1, false);


--
-- Name: moon_num_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_num_id_seq', 20, true);


--
-- Name: planet_num_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_num_id_seq', 15, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 1, false);


--
-- Name: sample_numbe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.sample_numbe_id_seq', 3, true);


--
-- Name: star_num_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_num_id_seq', 10, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 1, false);


--
-- Name: galaxy galaxy_galaxy_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_galaxy_id_key UNIQUE (galaxy_id);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_num_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_num_id_key UNIQUE (num_id);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_num_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_num_id_key UNIQUE (num_id);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: sample sample_numbe_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sample
    ADD CONSTRAINT sample_numbe_id_key UNIQUE (sample_id);


--
-- Name: sample sample_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sample
    ADD CONSTRAINT sample_pkey PRIMARY KEY (sample_id);


--
-- Name: star star_num_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_num_id_key UNIQUE (num_id);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_galaxy_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

