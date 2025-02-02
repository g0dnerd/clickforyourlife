#![allow(clippy::new_without_default)]
use rand::{rng, Rng};
use std::fmt;

use wasm_bindgen::prelude::*;

const EXHAUSTION_LIMITS: [usize; 4] = [2, 25, 45, 70];
const PRICES: [u32; 9] = [20, 50, 90, 200, 500, 900, 2000, 5000, 9000];
const ITEM_RATE_GAINS: [f64; 9] = [0.5, 1.2, 2.5, 15.0, 40.0, 83.8, 243.11, 334.99, 999.99];

fn random_name() -> String {
    let mut rng = rng();
    fn component(rng: &mut impl Rng) -> String {
        let mut c = String::new();
        for _ in 0..4 {
            if rng.random_bool(0.2) {
                c.push(rng.random_range(b'A'..=b'Z') as char);
            } else {
                c.push(char::from_digit((rng).random_range(0..10), 10).unwrap());
            }
        }
        c
    }
    format!(
        "{}-{}-{}",
        component(&mut rng),
        component(&mut rng),
        component(&mut rng),
    )
}

#[wasm_bindgen]
pub struct Player {
    wealth: f64,
    rate: f64,
    worked: usize,
    exhaustion_level: usize,
    name: String,
}

#[wasm_bindgen]
impl Player {
    pub fn new() -> Self {
        Self {
            wealth: 0.0,
            rate: 1.0,
            worked: 0,
            exhaustion_level: 0,
            name: random_name(),
        }
    }

    pub fn tick(&mut self) {
        self.wealth += self.rate;
    }

    pub fn bump(&mut self, amount: f64) {
        self.wealth -= amount;
    }

    pub fn render_name(&self) -> String {
        self.name.clone()
    }

    pub fn increase_rate(&mut self, amount: f64) {
        self.rate += amount;
    }

    pub fn work(&mut self) -> usize {
        self.worked += 1;
        if self.worked >= EXHAUSTION_LIMITS[self.exhaustion_level] {
            self.exhaustion_level += 1;
        }
        self.exhaustion_level
    }

    pub fn attempt_purchase(&mut self, item_index: usize) -> bool {
        let price = PRICES[item_index - 1];
        if self.wealth < price as f64 {
            return false;
        } else {
            self.wealth -= price as f64;
            let rate_increase = ITEM_RATE_GAINS[item_index - 1];
            self.rate += rate_increase;
            return true;
        }
    }

    pub fn render(&self) -> String {
        self.to_string()
    }

    pub fn render_rate(&self) -> String {
        if self.rate.fract() == 0.0 {
            format!("{}", self.rate.trunc() as u64)
        } else {
            format!("{:.2}", self.rate)
        }
    }
}

impl fmt::Display for Player {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:.0}", self.wealth)
    }
}

#[wasm_bindgen]
pub struct Supervisor {
    alert_level: usize,
}

#[wasm_bindgen]
impl Supervisor {
    pub fn new() -> Self {
        Self { alert_level: 0 }
    }

    pub fn get_alert_level(&self) -> usize {
        self.alert_level
    }

    pub fn modify_alert_level(&mut self, change: isize) {
        if self.alert_level as isize + change <= 0 {
            self.alert_level = 0;
        } else {
            self.alert_level = (self.alert_level as isize + change) as usize;
        }
    }
}
