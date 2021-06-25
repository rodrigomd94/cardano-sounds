﻿using System;

namespace CS.Csharp.CardanoCLI.Models
{
    public class PolicyParams
    {
        public bool TimeLimited { get; set; }

        public int? ValidForMinutes { get; set; }

        public string PolicyName { get; set; }

    }
}