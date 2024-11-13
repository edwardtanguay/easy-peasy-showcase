-> start

=== start ===
Hello, have you ever heard of the 5 Size Fits All concept?

+ [No, please explain it to me.] -> explain
+ [Yes, I understand it.] -> collect_badge
 
=== explain ===

The "5 sizes fits all" concept refers to designing products or solutions that accommodate the needs of most users by offering five different size options. 

+ [Why five sizes and not some other number?] --> why_five
+ [Thanks, I understand it now] -> collect_badge

=== why_five ===

There is nothing special with the number five. Four, five or six sizes will generally allow designers to cover a broad spectrum of user needs, without needing to satisify all users' needs.

+ [Thanks, I understand it now.] --> collect_badge

=== collect_badge ===
Great, then you can collect your badge. # collect_badge

+ [Before I collect my badge, please explain it to me again.] --> explain
-> END
