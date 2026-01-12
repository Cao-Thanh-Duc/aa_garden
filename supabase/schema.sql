-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- USERS TABLE (Extends Auth)
create table public.users (
  id uuid references auth.users not null primary key,
  email text not null,
  role text check (role in ('admin', 'customer')) default 'customer',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- CATEGORIES TABLE
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- MENU ITEMS TABLE
create table public.menu_items (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price decimal(10,2) not null,
  category_id uuid references public.categories(id),
  image_url text,
  is_available boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RESERVATIONS TABLE
create table public.reservations (
  id uuid default uuid_generate_v4() primary key,
  customer_name text not null,
  email text not null,
  phone text not null,
  date date not null,
  time time not null,
  guests integer not null,
  status text check (status in ('pending', 'confirmed', 'cancelled', 'rejected')) default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES (Basic Setup)
alter table public.users enable row level security;
alter table public.menu_items enable row level security;
alter table public.reservations enable row level security;
alter table public.categories enable row level security;

-- Public read for menu
create policy "Public menu access" on public.menu_items for select using (true);
create policy "Public category access" on public.categories for select using (true);

-- Admin full access (Assuming checking auth.uid() against a role table or metadata later, for now illustrative)
-- Ideally you write a function `is_admin()` checking the public.users table.
