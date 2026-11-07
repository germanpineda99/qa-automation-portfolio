-- Illustrative SQL only: this file uses an original fictional schema.
-- It has not been executed against a live database in this repository.
-- Assumed schema: customers(id, name), orders(id, customer_id, status, total).

-- QA check: include customers with zero orders.
SELECT c.id, c.name, COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.id, c.name;

-- QA check: identify paid orders above the review threshold.
SELECT o.id, o.customer_id, o.total
FROM orders o
WHERE o.status = 'PAID' AND o.total > 100
ORDER BY o.total DESC;
